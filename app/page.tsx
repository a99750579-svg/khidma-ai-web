import dynamic from "next/dynamic";

const KhidmaAIV2 = dynamic(() => import("./components/KhidmaAIV2"), {
  loading: () => <p>جاري التحميل...</p>,
});