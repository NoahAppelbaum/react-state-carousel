const HEADS_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/2010_cent_obverse.jpg/240px-2010_cent_obverse.jpg"
const TAILS_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jefferson-Nickel-Unc-Obv.jpg/244px-Jefferson-Nickel-Unc-Obv.jpg"

/** Coin: Display heads or tails
 *
 * Props -
 * isHeads: boolean (true/false)
 *
 * Flipper --> Coin
 */
function Coin({ isHeads }) {
  const source = isHeads ? HEADS_IMG : TAILS_IMG;
  const altText = isHeads ? "heads" : "tails";

  return (
    <div className="Coin">
      <img src={source} alt={altText} />
    </div>
  )

}

export default Coin