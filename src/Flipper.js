import { useState } from "react";
import Coin from "./Coin";


/** Flipper: Keep track of coinflips.
 *
 * State -
 * isHeads: boolean (true/false)
 * headCount: number
 * tailCount: number
 *
 * Flipper -> Coin
 */
function Flipper() {
  const [isHeads, setIsHeads] = useState();
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  const total = headCount + tailCount;

  function flipCoin() {
    const num = Math.random();

    if (num > 0.5) {
      setIsHeads(true);
      setHeadCount(headCount + 1);
    } else {
      setIsHeads(false);
      setTailCount(tailCount + 1);
    }
  }

  return (
    <div className="Flipper">
      <h1>Let's flip a coin!</h1>
      { total > 0 && <Coin isHeads={isHeads} />}
      <button onClick={flipCoin}>FLIP MEEEEEE</button>

      <p>Out of {total} flips, there have been {headCount} heads and {tailCount} tails.</p>

    </div>
  );
}

export default Flipper;
