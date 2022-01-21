import {
  Wrapper,
  Twitter,
  Facebook,
  LinkedIn,
  Instagram,
  Copy,
  ShareIcon,
  FallBack,
  Content,
} from "../styles/styledShare";
import Panel from "./Panel";
import { useState, useEffect } from "react";

export default function Share({ slug }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showShare, setShowShare] = useState(true);
  const [showCopy, setShowCopy] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const title = "Sample Comic Title";
  const url = "https://the-orange-runner.vercel.app/";
  const text = "Relevant Orange Runner comic...";

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

  function socialShare(e) {
    alert(`Sharing to ${e.target.name}`);
  }

  function handleCopy(e) {
    navigator.clipboard.writeText(`${process.env.APP_URL}/comics/${slug}`).then(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 1000);
    });
  }

  function handleShare() {
    if (navigator.share) {
      // Share API is supported
      navigator
        .share({
          title,
          url,
          text,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // Fallback
      setIsOpen(true);
    }
  }

  // function handleFallbackShare() {
  //   setIsOpen(false);
  // }

  return (
    <Wrapper>
      {/* <Instagram name="Instagram" type="button" onClick={socialShare} /> */}
      <Facebook name="Facebook" type="button" onClick={socialShare} />
      <Twitter name="Twitter" type="button" onClick={socialShare} />
      <LinkedIn name="LinkedIn" type="button" onClick={socialShare} />
      {showCopy && (
        <Copy name="wherever you want!" type="button" $showTooltip={showTooltip} onClick={handleCopy} />
      )}{" "}
      {showShare && <ShareIcon name="wherever you want!" type="button" onClick={handleShare} />}{" "}
      {/* <ShareIcon name="wherever you want!" type="button" $showShare={true} onClick={handleShare} /> */}
      {/* I think not rendering the share button is a better option than a redundant share box */}
      {/* <FallBack $isOpen={isOpen} onClick={handleFallbackShare}>
        <Content>
          <Twitter name="Twitter" type="button" $fallback onClick={socialShare} />
          <Instagram name="Instagram" type="button" $fallback onClick={socialShare} />
          <LinkedIn name="LinkedIn" type="button" $fallback onClick={socialShare} />
          <Facebook name="Facebook" type="button" $fallback onClick={socialShare} />
          <Copy name="wherever you want!" type="button" $fallback onClick={socialShare} />
        </Content>
      </FallBack> */}
    </Wrapper>
  );
}
