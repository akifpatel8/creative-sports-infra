import React from 'react';

export function VideoBanner() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-video overflow-hidden bg-black pointer-events-none">
        <iframe
          className="absolute w-[116%] h-[120%] top-[-10%] left-[-8%]"
          src="https://www.youtube.com/embed/Yy2ikI0lmPw?si=E1I71JK8R6OxtQKo&controls=0&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
