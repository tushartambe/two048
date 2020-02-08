(ns two048.core
  (:require
   [reagent.core :as r]))

(def initial-board
  [[0 0 0 2]
   [0 0 2 0]
   [0 0 0 0]
   [2 0 0 0]])

(defonce board (r/atom initial-board))

(defn add-valid-adjacents [nums]
  (flatten
   (map #(apply (partial +) %1)
        (mapcat #(partition-all 2 %1) (partition-by identity nums)))))

(defn process-left [row]
  (take 4 (concat
           (filter (complement zero?) (add-valid-adjacents row))
           (repeat 0))))

(defn move-left [board]
  (map process-left board))

(defn process-right [row]
  (reverse (process-left (reverse row))))

(defn move-right [board] (map process-right board))

(defn move-down [board]
  (apply map vector
         (map process-right (apply map vector board))))

(defn move-up [board]
  (apply map vector
         (map process-left (apply map vector board))))

(defn find-index-to-replace [board]
  (rand-nth (keep-indexed
             #(if (zero? %2) %1) (flatten board))))

(defn get-new-board [board]
  (into [] (partition 4 (assoc (into [] (flatten board)) (find-index-to-replace board) 2))))

(defn move [f board]
  (do (swap! board f)
      (swap! board get-new-board)))

(def colors {2 "#fefefa"
             4 "#ffffe0"
             8 "#fff8dc"
             16 "#f5f5dc"
             32 "#f0ead6"
             64 "#f0e68c"
             128 "#ffdb58"
             256 "#e4d96f"
             512 "#ffc40c"
             1024 "#ffff00"})

(defn createDiv [element]
  [:div {:class "element" :style {:background-color (get colors element)}} (if (zero? element) "" element)])

(defn render-row [row]
  [:div {:class "row"} (map createDiv row)])

(defn home-page []
  [:div  {:class       "page"
          :autoFocus   1
          :tabIndex    1
          :on-key-down #(case (.-which %)
                          37 (move move-left board)
                          38 (move move-up board)
                          39 (move move-right board)
                          40 (move move-down board) nil)}
   [:h2 {:style {:width "400px"}} "two-048"]
   [:div {:class "board"} (map render-row @board)]])

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
