(ns tictactoe.game)

(def utility {"O" -1
              "X" 1
              "draw" 0})

(defn play-move
  [board move player]
  (if (or (= (get-in board move) "X")
          (= (get-in board move) "O"))
    board
    (assoc-in board move player))
  )

(defn win?
  [board]
  (if (or (= "X" (get-in board [0 0]) (get-in board [0 1]) (get-in board [0 2]))
          (= "X" (get-in board [1 0]) (get-in board [1 1]) (get-in board [1 2]))
          (= "X"  (get-in board [2 0]) (get-in board [2 1]) (get-in board [2 2]))
          (= "X" (get-in board [0 0]) (get-in board [1 0]) (get-in board [2 0]))
          (= "X" (get-in board [0 1]) (get-in board [1 1]) (get-in board [2 1]))
          (= "X" (get-in board [0 2]) (get-in board [1 2]) (get-in board [2 2]))
          (= "X" (get-in board [0 0]) (get-in board [1 1]) (get-in board [2 2]))
          (= "X" (get-in board [0 2]) (get-in board [1 1]) (get-in board [2 0])))
    "X"
    (if (or (= "O" (get-in board [0 0]) (get-in board [0 1]) (get-in board [0 2]))
            (= "O" (get-in board [1 0]) (get-in board [1 1]) (get-in board [1 2]))
            (= "O"  (get-in board [2 0]) (get-in board [2 1]) (get-in board [2 2]))
            (= "O" (get-in board [0 0]) (get-in board [1 0]) (get-in board [2 0]))
            (= "O" (get-in board [0 1]) (get-in board [1 1]) (get-in board [2 1]))
            (= "O" (get-in board [0 2]) (get-in board [1 2]) (get-in board [2 2]))
            (= "O" (get-in board [0 0]) (get-in board [1 1]) (get-in board [2 2]))
            (= "O" (get-in board [0 2]) (get-in board [1 1]) (get-in board [2 0])))
      "O"
      (if (not (some #(= "" %) (flatten board)))
        "draw"
        nil))))

(defn actions
  [board]
  (for [i (range 3)
        j (range 3)
        :when (= "" (get-in board [i j]))]
    [i j]))

;; Ai not owrking, will double check later 

`(defn max-value
  [board]
  (let [v (atom -1000)]
    (if (win? board)
      (utility (win? board)) 
      (do
       (doseq [action (actions board)]
         (reset! v (max @v (min-value (play-move board action "O")))))
       @v))))`

(defn min-value
  [board]
  (let [v (atom 1000)]
    (if (win? board)
      (utility (win? board))
      (do
       (doseq [action (actions board)]
               (do (println (play-move board action "X"))
                 (reset! v (min @v (max-value (play-move board action "X"))))))
             @v))))

(defn ai-to-win
  [board player]
  (if (= player "X")
    (let [v (atom -1000)]
    (if (win? board)
      (utility (win? board))
      (do
        (doseq [action (actions board)]
          (reset! v (max @v (ai-to-win (play-move board action "O") "O"))))
        @v)))
    (let [v (atom 1000)]
      (if (win? board)
        (utility (win? board))
        (do
          (doseq [action (actions board)]
            (reset! v (min @v (ai-to-win (play-move board action "X") "X"))))
          @v)))))



(defn chooser
  [options player]
  (if (= player "X")
    (let [max-value (apply max (map second (concat options)))]
      (rand-nth (map first (filter #(= max-value (second %)) options))))
    (let [min-value (apply min (map second (concat options)))]
      (rand-nth (map first (filter #(= min-value (second %)) options))))))



(defn ai-to-choose
  [board player]
  (chooser 
   (for [action (actions board)]
   [ action (ai-to-win (play-move board action player) player)])
           player))














