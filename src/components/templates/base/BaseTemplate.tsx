import styles from "./BaseTemplate.module.css";

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div
      className={`${styles.container} text-3xl font-bold leading-none font-mono`}
    >
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
