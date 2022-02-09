
import { useUI } from "@contexts/ui.context";
import AuthorizedMenu from "./authorized-menu";
import LinkButton from "@components/ui/link-button";
import { NavbarIcon } from "@components/icons/navbar-icon";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { ROUTES } from "@utils/routes";
import {
  adminAndOwnerOnly,
  getAuthCredentials,
  hasAccess,
} from "@utils/auth-utils";
import Link from "@components/ui/link";

const Navbar = () => {
  const { t } = useTranslation();
  const { toggleSidebar } = useUI();

  const { permissions } = getAuthCredentials();

  return (
    <header className="bg-white shadow fixed w-full z-40">
      <nav className="px-5 md:px-8 py-4 flex items-center justify-between">
        {/* <!-- Mobile menu button --> */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={toggleSidebar}
          className="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent lg:hidden"
        >
          <NavbarIcon />
        </motion.button>

        <div className="hidden md:flex ms-5 me-auto">
          <Link href={ROUTES.DASHBOARD}>
            <div>
              <h3 className="font-semibold text-lg">CryptoCommerce</h3>
            </div>
          </Link>
        </div>
    
        <div className="flex items-center space-s-8">
          {hasAccess(adminAndOwnerOnly, permissions) && (
            <LinkButton
              href={ROUTES.CREATE_SHOP}
              className="ms-4 md:ms-6"
              size="small"
            >
              {t("common:text-create-shop")}
            </LinkButton>
          )}

          <AuthorizedMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
