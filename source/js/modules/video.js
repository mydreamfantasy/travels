import { video } from "../../media/video";

export const initVideo = function () {
  const link = document.querySelector("[data-video-btn]");
  const boxVideo = document.querySelector("[data-video]");

  if (!link) {
    return;
  } else {
    link.addEventListener("click", (evt) => {
      const player = document.querySelector("[data-video-player]");
      evt.preventDefault();

      if (boxVideo) {
        boxVideo.classList.add("banner__video--active");

        // eslint-disable-next-line no-new, no-undef
        new YT.Player(player, {
          videoId: "9TZXsZItgdw",
          events: {
            onReady: (e) => e.target.playVideo(),
          },
          video,
        });
        evt.stopPropagation();
      }
    });
  }
};
