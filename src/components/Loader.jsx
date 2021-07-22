import FadeIn from "react-fade-in";
import Loader from "react-loader-spinner";

export default function LoaderPreset() {
  return (
    <FadeIn>
      <Loader
        style={{margin: "auto", marginTop: "30px"}}
        type="TailSpin"
        color="#FFFFFF"
        height={70}
        width={70}
      />
    </FadeIn>
  );
}