import WorkflowAutomationIcon from '../assets/img/svg/workflowAutomation.svg?react';

export default function WorkflowAutomationSvg() {
  return (
    <div
      className="service-nav-item"
      id="v-pills-automation-tab"
      data-bs-toggle="pill"
      data-bs-target="#v-pills-automation"
      role="tab"
      aria-controls="v-pills-automation"
      aria-selected="false"
    >
      <div className="icon">
        <WorkflowAutomationIcon width={36} height={36} />
      </div>
      <h4 className="mb-0">(RPA) Robotic ProcessAutomation</h4>
    </div>
  );
}
