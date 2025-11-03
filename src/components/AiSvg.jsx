import AiIcon from "../assets/img/svg/ai.svg?react";

export default function AiSvg() {
  return (
    <div
      className="service-nav-item"
      id="v-pills-ai-tab"
      data-bs-toggle="pill"
      data-bs-target="#v-pills-ai"
      role="tab"
      aria-controls="v-pills-ai"
      aria-selected="true"
    >
      <div className="icon">
        <AiIcon width={36} height={36} />
      </div>
      <h4 className="mb-0">Artificial Intelligence & LLM Integration</h4>
    </div>
  );
}
