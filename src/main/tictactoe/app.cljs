(ns tictactoe.app
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [tictactoe.game :as game]
             ))


;states 
(def playing? (r/atom false))

(def board (r/atom [["" "" ""]
                    ["" "" ""]
                    ["" "" ""]]))
(def options? (r/atom true))
(def player (r/atom nil))



;functions

(defn handleOptions [option]
  (if (= option "O")
    (do
      (reset! options? false)
      (reset! playing? true)
      (reset! player "O"))
    (do
      (reset! options? false)
      (reset! playing? true)
      (reset! player "X")
      )))


(defn change-player
  [player]
  (if (= player "X")
    "O"
    "X"))



(defn playFn [index]
  (let [new-board (game/play-move @board index @player)]
    (if (= new-board @player)
      (js/alert "Already a piece in this position")
      (if (game/win? new-board)
        (do
          (reset! board new-board)
          (reset! playing? false)
          (js/alert (str @player " Won!")))
        (do
          (reset! board new-board)
          (reset! player (change-player @player))))))
  )

; Components 

(defn GameBoard [] 
  [:div {:class "container"}
   [:div {:class "col"}
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [0 0])) } (get-in @board [0 0])] 
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [0 1])) } (get-in @board [0 1])]
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [0 2])) } (get-in @board [0 2])]
    ]
   [:div {:class "col"}
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [1 0])) } (get-in @board [1 0])]
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [1 1])) } (get-in @board [1 1])]
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [1 2])) } (get-in @board [1 2])]]
   [:div {:class "col"}
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [2 0])) } (get-in @board [2 0])]
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [2 1])) } (get-in @board [2 1])]
    [:span {:class (if (= @playing? true) "cell" "disabledCell") :onClick (fn [] (playFn [2 2])) } (get-in @board [2 2])]]
   ]
  )

(defn Application []
  [:div
   (if @options?
     [:div [:h1 "What player goes first?"]
      [:button {:onClick (fn [] (handleOptions "O")) :class "select-button"} "O"]
      [:button {:onClick (fn [] (handleOptions "X")) :class "select-button"} "X"]]
     [:main {:class "main"}
      [:h1 "Refresh page to reset"]
      [:h2 (str @player "'s turn")]
      [GameBoard]
      ]
     )])


(defn init []
(dom/render [Application] (js/document.getElementById "app"))
 )