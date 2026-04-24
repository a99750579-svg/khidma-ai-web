import dynamic from "next/dynamic";

const KhidmaAIV2 = dynamic(() => import("./components/KhidmaAIV2"));

export default function Page() {
  return <KhidmaAIV2 />;
}