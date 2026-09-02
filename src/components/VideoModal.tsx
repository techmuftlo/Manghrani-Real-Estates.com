export interface VideoModalProps {
  isOpen: boolean;
  videoUrl?: string;
  videoId?: string;
  onClose: () => void;
}

export default function VideoModal({
  isOpen,
  videoUrl,
  videoId,
  onClose,
}: VideoModalProps) {
  if (!isOpen) return null;

  let embedUrl = "https://www.youtube.com/embed/pPl3ZZdTP3g?autoplay=1";

  if (videoId) {
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else if (videoUrl) {
    if (videoUrl.includes("watch?v=")) {
      const vid = videoUrl.split("watch?v=")[1].split("&")[0];
      embedUrl = `https://www.youtube.com/embed/${vid}?autoplay=1`;
    } else if (videoUrl.includes("youtu.be/")) {
      const vid = videoUrl.split("youtu.be/")[1].split("?")[0];
      embedUrl = `https://www.youtube.com/embed/${vid}?autoplay=1`;
    } else {
      embedUrl = videoUrl;
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.85)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          aspectRatio: "16 / 9",
          backgroundColor: "#000",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-35px",
            right: "0",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
          }}
          aria-label="Close modal"
        >
          <i className="far fa-times" />
        </button>
        <iframe
          src={embedUrl}
          title="Video player"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
