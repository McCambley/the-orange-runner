import {
  Wrapper,
  LoadingHeader,
  LoadingTime,
  LoadingParagraph,
  LoadingDiv,
  StatusSpinner,
} from "../styles/styledLoading";

export default function Loading() {
  return (
    <Wrapper>
      <LoadingTime>January 6th, 1993</LoadingTime>
      <LoadingHeader>A story about running</LoadingHeader>
      <LoadingParagraph>
        Hi, I’m Luke. I went to the School of Visual Arts and majored in boxing. I started working at a running store
        after graduating and got into running. Somewhere along the way I started doodling about it and posting it to
        Instagram. I run a lot, I draw comics about running, and in my spare time, I read books about running. It’s
        terribly one-dimensional.
      </LoadingParagraph>
      <LoadingDiv />
      {/* <LoadingTime>January 6th, 1993</LoadingTime>
      <LoadingHeader>A story about running</LoadingHeader>
      <LoadingParagraph>
        Hi, I’m Luke. I went to the School of Visual Arts and majored in boxing. I started working at a running store
        after graduating and got into running. Somewhere along the way I started doodling about it and posting it to
        Instagram. I run a lot, I draw comics about running, and in my spare time, I read books about running. It’s
        terribly one-dimensional.
      </LoadingParagraph>
      <LoadingDiv /> */}
      {/* <LoadingTime>January 6th, 1993</LoadingTime>
      <LoadingHeader>A story about running</LoadingHeader>
      <LoadingParagraph>
        Hi, I’m Luke. I went to the School of Visual Arts and majored in boxing. I started working at a running store
        after graduating and got into running. Somewhere along the way I started doodling about it and posting it to
        Instagram. I run a lot, I draw comics about running, and in my spare time, I read books about running. It’s
        terribly one-dimensional.
      </LoadingParagraph>
      <LoadingDiv /> */}
      {/* <StatusSpinner /> */}
      {/* {`Searching for: ${router.query.name}`} */}
    </Wrapper>
  );
}
