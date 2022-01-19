import { Wrapper, Twitter, Facebook, LinkedIn, Instagram, Copy } from "../styles/styledShare";

export default function Share() {
  function handleShare(e) {
    alert(`Sharing to ${e.target.name}`);
  }

  return (
    <Wrapper>
      <Twitter name="Twitter" type="button" onClick={handleShare} />
      <Instagram name="Instagram" type="button" onClick={handleShare} />
      <LinkedIn name="LinkedIn" type="button" onClick={handleShare} />
      <Facebook name="Facebook" type="button" onClick={handleShare} />
      <Copy name="wherever you want!" type="button" onClick={handleShare} />
    </Wrapper>
  );
}
