/* eslint-disable react-refresh/only-export-components */
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaDocker,
  FaAws,
  FaGitlab,
  FaGithub,
  FaLinkedin,
  FaGooglePlay,
  FaAppStore,
  FaChrome,
  FaLock,
  FaUniversalAccess,
  FaCheckCircle,
  FaVideo,
  FaMobileAlt,
  FaGitAlt,
  FaGlobe,
  FaWpforms,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiFlutter,
  SiIonic,
  SiNextdotjs,
  SiExpress,
  SiRedis,
  SiInfluxdb,
  SiSocketdotio,
  SiPusher,
  SiStripe,
  SiRazorpay,
  SiJest,
  SiStorybook,
  SiMui,
  SiAntdesign,
  SiEslint,
  SiPrettier,
  SiPuppeteer,
  SiPostgresql,
  SiSqlite,
  SiMysql,
  SiShopify,
  SiClickup,
  SiI18Next,
  SiNpm,
  SiCakephp,
  SiAppstore,
  SiAstro,
  SiGooglemaps,
} from "react-icons/si";
import { MdWeb, MdEmail, MdPayment, MdStorage, MdCloud } from "react-icons/md";

const GooglePlayColorIcon = ({
  size = 20,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="30 336.7 120.9 129.2"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FFD400"
      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
    />
    <path
      fill="#FF3333"
      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
    />
    <path
      fill="#48FF48"
      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
    />
    <path
      fill="#3BCCFF"
      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
    />
  </svg>
);

export const getTechIcon = (techName: string) => {
  const normalized = techName.toLowerCase();

  // Frontend
  if (normalized.includes("react native"))
    return { icon: FaReact, color: "#61DAFB" };
  if (normalized.includes("react")) return { icon: FaReact, color: "#61DAFB" };
  if (normalized.includes("angular"))
    return { icon: FaAngular, color: "#DD0031" };
  if (normalized.includes("html")) return { icon: FaHtml5, color: "#E34F26" };
  if (normalized.includes("css")) return { icon: FaCss3Alt, color: "#1572B6" };
  if (normalized.includes("javascript"))
    return { icon: FaJs, color: "#F7DF1E" };
  if (normalized.includes("typescript"))
    return { icon: SiTypescript, color: "#3178C6" };
  if (normalized.includes("flutter"))
    return { icon: SiFlutter, color: "#02569B" };
  if (normalized.includes("ionic")) return { icon: SiIonic, color: "#3880FF" };
  if (normalized.includes("astro")) return { icon: SiAstro, color: "#FF5D01" };
  if (normalized === "wcag 2.1" || normalized.includes("accessib"))
    return { icon: FaUniversalAccess, color: "#005A9C" };
  if (normalized.includes("axe"))
    return { icon: FaUniversalAccess, color: "#E86C19" };

  // Backend
  if (normalized.includes("node")) return { icon: FaNodeJs, color: "#339933" };
  if (normalized.includes("next"))
    return { icon: SiNextdotjs, color: "#ffffff" };
  if (normalized.includes("express"))
    return { icon: SiExpress, color: "#ffffff" };
  if (normalized.includes("joi"))
    return { icon: FaCheckCircle, color: "#f3f4f6" };
  if (normalized.includes("puppeteer"))
    return { icon: SiPuppeteer, color: "#40B5A4" };

  // Database
  if (normalized.includes("mongo"))
    return { icon: SiMongodb, color: "#47A248" };
  if (normalized.includes("redis")) return { icon: SiRedis, color: "#DC382D" };
  if (normalized.includes("influx"))
    return { icon: SiInfluxdb, color: "#22ADF6" };
  if (normalized.includes("sqlite") || normalized.includes("sql lite"))
    return { icon: SiSqlite, color: "#003B57" };
  if (normalized.includes("postgres"))
    return { icon: SiPostgresql, color: "#336791" };
  if (normalized.includes("mysql")) return { icon: SiMysql, color: "#4479A1" };

  // Firebase / Cloud
  if (normalized.includes("firebase"))
    return { icon: SiFirebase, color: "#FFCA28" };
  if (normalized.includes("firestore"))
    return { icon: SiFirebase, color: "#FFCA28" };
  if (normalized.includes("auth")) return { icon: FaLock, color: "#FFCA28" };
  if (normalized.includes("crashlytics"))
    return { icon: SiFirebase, color: "#FFCA28" };
  if (normalized.includes("storage"))
    return { icon: MdStorage, color: "#FFCA28" };
  if (normalized.includes("realtime"))
    return { icon: MdCloud, color: "#FFCA28" };
  if (normalized.includes("messaging") || normalized.includes("notification"))
    return { icon: SiFirebase, color: "#FFCA28" };

  if (
    normalized.includes("aws") ||
    normalized.includes("ec2") ||
    normalized.includes("s3") ||
    normalized.includes("cloudfront")
  )
    return { icon: FaAws, color: "#FF9900" };
  if (normalized.includes("gitlab"))
    return { icon: FaGitlab, color: "#FC6D26" };
  if (normalized.includes("docker"))
    return { icon: FaDocker, color: "#2496ED" };
  if (normalized.includes("github actions"))
    return { icon: FaGithub, color: "#ffffff" };
  if (normalized.includes("git")) return { icon: FaGitAlt, color: "#F05032" };

  // State Management
  if (normalized.includes("redux") || normalized.includes("rtk"))
    return { icon: SiRedux, color: "#764ABC" };
  if (normalized.includes("context api"))
    return { icon: FaReact, color: "#61DAFB" };
  if (normalized.includes("dva")) return { icon: FaReact, color: "#61DAFB" };

  // Inegrations / Realtime
  if (normalized.includes("socket"))
    return { icon: SiSocketdotio, color: "#ffffff" };
  if (normalized.includes("pusher"))
    return { icon: SiPusher, color: "#300D4F" };
  if (normalized.includes("shopify"))
    return { icon: SiShopify, color: "#7AB55C" };
  if (normalized.includes("clickup"))
    return { icon: SiClickup, color: "#7B68EE" };
  if (normalized.includes("agora")) return { icon: FaVideo, color: "#099DFD" };
  if (normalized.includes("google map"))
    return { icon: SiGooglemaps, color: "#4285F4" };
  if (normalized.includes("web3forms"))
    return { icon: FaWpforms, color: "#3B82F6" };
  if (normalized.includes("rest api")) return { icon: MdWeb, color: "#ffffff" };

  // Payments
  if (normalized.includes("stripe"))
    return { icon: SiStripe, color: "#635BFF" };
  if (normalized.includes("razorpay"))
    return { icon: SiRazorpay, color: "#0C2F54" };
  if (normalized.includes("google in-app"))
    return { icon: FaGooglePlay, color: "#3DDC84" };
  if (normalized.includes("apple in-app"))
    return { icon: FaAppStore, color: "#007AFF" };
  if (normalized.includes("payment"))
    return { icon: MdPayment, color: "#4caf50" };
  if (normalized.includes("accept payments"))
    return { icon: MdPayment, color: "#4caf50" };

  // Testing & UI
  if (normalized.includes("jest")) return { icon: SiJest, color: "#C21325" };
  if (normalized.includes("storybook"))
    return { icon: SiStorybook, color: "#FF4785" };
  if (normalized.includes("mui")) return { icon: SiMui, color: "#007FFF" };
  if (normalized.includes("ant"))
    return { icon: SiAntdesign, color: "#0170FE" };
  if (normalized.includes("paper")) return { icon: FaReact, color: "#61DAFB" };

  // Tools
  if (normalized.includes("eslint"))
    return { icon: SiEslint, color: "#4B32C3" };
  if (normalized.includes("prettier"))
    return { icon: SiPrettier, color: "#F7B93E" };
  if (normalized.includes("chrome"))
    return { icon: FaChrome, color: "#4285F4" };
  if (normalized.includes("husky")) return { icon: FaGitAlt, color: "#F05032" };
  if (normalized.includes("npm")) return { icon: SiNpm, color: "#CB3837" };
  if (normalized.includes("cakephp"))
    return { icon: SiCakephp, color: "#D33C43" };
  if (normalized.includes("i18n")) return { icon: SiI18Next, color: "#26A69A" };
  if (normalized.includes("vs code")) return { icon: MdWeb, color: "#007ACC" };
  if (normalized.includes("bluetooth"))
    return { icon: FaMobileAlt, color: "#0082FC" };

  // Fallback
  return { icon: FaCheckCircle, color: "#6b7280" }; // Default icon instead of null
};

export const getSocialIcon = (linkType: string) => {
  const normalized = linkType.toLowerCase();
  if (normalized.includes("github")) return { icon: FaGithub, color: "#fff" };
  if (normalized.includes("linkedin"))
    return { icon: FaLinkedin, color: "#0077B5" };
  if (normalized.includes("email")) return { icon: MdEmail, color: "#EA4335" };
  if (normalized.includes("web")) return { icon: FaGlobe, color: "#38bdf8" }; // Cyan-400
  if (normalized.includes("playstore") || normalized.includes("play store"))
    return { icon: GooglePlayColorIcon, color: "" }; // Multicolor Custom Icon
  if (normalized.includes("appstore") || normalized.includes("app store"))
    return { icon: SiAppstore, color: "#0D96F6" }; // Apple App Store logo

  return { icon: FaGlobe, color: "#fff" };
};
