import MigrationIcon from "../assets/img/svg/migration.svg?react";

export default function ModernizationSvg() {
  return (
    <div
      className="service-nav-item"
      id="v-pills-home-tab"
      data-bs-toggle="pill"
      data-bs-target="#v-pills-modernization"
      role="tab"
      aria-controls="v-pills-modernization"
      aria-selected="false"
    >
      <div className="icon">
        <MigrationIcon width={36} height={36} />
      </div>
      <h4 className="mb-0">Digital Transformation</h4>
    </div>
  );
}