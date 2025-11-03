import AiIcon from "../assets/img/svg/enterpriseSolution.svg?react";

export default function EnterpriseSolutionSvg() {
  return (
    <div
      className="service-nav-item"
      id="v-pills-solution-tab"
      data-bs-toggle="pill"
      data-bs-target="#v-pills-solution"
      role="tab"
      aria-controls="v-pills-solution"
      aria-selected="false"
    >
      <div className="icon">
        <AiIcon width={36} height={36} />
      </div>
      <h4 className="mb-0">ERP Implementation</h4>
    </div>
  );
}
