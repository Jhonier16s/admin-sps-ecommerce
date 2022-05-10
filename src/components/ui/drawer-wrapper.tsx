
import { CloseIcon } from "@components/icons/close-icon";
import Scrollbar from "./scrollbar";
import Link from "./link";
import {ROUTES} from '@utils/routes'

type DrawerWrapperProps = {
  children: any;
  onClose: () => void;
};

const DrawerWrapper: React.FunctionComponent<DrawerWrapperProps> = ({
  children,
  onClose,
}) => {
  return (
    <div className="flex flex-col h-full relative bg-blackSps">
      <div className="flex items-center  justify-between px-5 md:py-5 md:px-8 mb-4 md:mb-6 border-b border-border-200 border-opacity-75 absolute top-0 start-0 w-full h-16 z-30">
        <Link href={ROUTES.DASHBOARD}>
          <div>
            <h3 className="font-semibold text-white text-lg">CryptoCommerce</h3>
          </div>
        </Link>

        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 transition-all duration-200 focus:outline-none hover:bg-white focus:bg-accent hover:text-white focus:text-light"
        >
          <CloseIcon className="w-2.5 h-2.5 text-gray-900 " />
        </button>
      </div>
      {/* End of header part */}
      <div className="pt-16 h-full ">
        <Scrollbar className="w-full h-full">{children}</Scrollbar>
      </div>
      {/* End of menu part */}
    </div>
  );
};

export default DrawerWrapper;
