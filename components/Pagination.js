import React from "react";
import Link from "next/link";
import { LinkButton, RandomButton, Navigation } from "../styles/styledPagination";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Pagination({ slug, slugs, previousSlug, nextSlug }) {
  const router = useRouter();

  useEffect(() => {
    scrollToTop();
  }, [router]);
  function getRandomSlug() {
    if (slugs.length <= 1) return slug;
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    if (randomSlug === slug) {
      return getRandomSlug();
    }
    return randomSlug;
  }

  function getRandomComic(e) {
    router.push(`/comics/${getRandomSlug()}`);
  }

  function scrollToTop() {
    document.querySelector("main").scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }
  return (
    <Navigation>
      <Link href={`/comics/${previousSlug}`} passHref>
        <LinkButton>Previous</LinkButton>
      </Link>
      <RandomButton type="button" name="random" onClick={getRandomComic}>
        Random
      </RandomButton>
      <Link href={`/comics/${nextSlug}`} passHref>
        <LinkButton>Next</LinkButton>
      </Link>
    </Navigation>
  );
}
