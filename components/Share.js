import { Wrapper, Twitter, Facebook, LinkedIn, Copy, ShareIcon } from "../styles/styledShare";
import { useState, useEffect } from "react";

export default function Share({ slug, title, subtitle }) {
  const [showShare, setShowShare] = useState(true);
  const [showCopy, setShowCopy] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!(navigator && navigator.share)) {
      setShowShare(false);
    }
  }, []);

  useEffect(() => {
    console.log("here");
    if (!(navigator && navigator.clipboard)) {
      setShowCopy(false);
    }
  }, []);

  function handleCopy(e) {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL}/comics/${slug}`).then(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    });
  }

  function handleShare() {
    if (navigator.share) {
      // Share API is supported
      navigator
        .share({
          title: `${title} - The Orange Runner`,
          url: `${process.env.NEXT_PUBLIC_APP_URL}/comics/${slug}`,
          text: subtitle,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // Fallback
      console.log("Uh oh! Looks like something went wrong!");
    }
  }

  return (
    <Wrapper>
      <Facebook url={`${process.env.NEXT_PUBLIC_APP_URL}/comics/${slug}`} />
      <Twitter
        url={`${process.env.NEXT_PUBLIC_APP_URL}/comics/${slug}`}
        // title={`${title}: ${subtitle}`}
        title={`${title} - The Orange Runner`}
        via="theorangerunner"
      />
      <LinkedIn url={`${process.env.NEXT_PUBLIC_APP_URL}/comics/${slug}`} />
      {showCopy && <Copy name="wherever you want!" type="button" $showTooltip={showTooltip} onClick={handleCopy} />}
      {showShare && <ShareIcon name="wherever you want!" type="button" onClick={handleShare} />}{" "}
    </Wrapper>
  );
}
