type Props = {
  active: boolean;
  onClick: () => void;
  variant?: string;
};
export default function Burger({ active, onClick }: Props) {
  return (
    <div className={"container " + (active ? "active z-[999999]" : "")} onClick={onClick}>
      <div className={`meat meat-1 ${active ? ' bg-white':'dark:bg-white bg-black'}`} />
      <div className={`meat meat-2 ${active ? ' bg-white':'dark:bg-white bg-black'}`} />
      <div className={`meat meat-3 ${active ? ' bg-white':'dark:bg-white bg-black'}`} />
      <style jsx>
        {`
          .container {
            position: fixed;
            width: 38px;
            height: 38px;
            cursor: pointer;
            top: 1rem;
            left: 1.25rem;
            z-index: 2;
            
          }
          .meat {
            position: absolute;
            width: 28px;
            height: 2px;
            top: calc(50% - 2px / 2);
            left: calc(50% - 28px / 2);
            transition: all 150ms ease-in;
          }
          .meat-1 {
            transform: translateY(-10px);
          }
          .meat-2 {
            width: calc(28px - 6px);
          }
          .meat-3 {
            transform: translateY(10px);
          }
          .active .meat-1 {
            transform: rotate(45deg);
          }
          .active .meat-2 {
            opacity: 0;
          }
          .active .meat-3 {
            transform: rotate(-45deg);
          }

          @media (min-width: 769px) {
            .container {
              display: none;
            }
          }

        `}
      </style>
    </div>
  );
}
