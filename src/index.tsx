import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

export { default as Alert } from "./components/Alert";
export { default as AutoComplete } from "./components/AutoComplete";
export { default as Button } from "./components/Button";
export { default as Menu } from "./components/Menu";
export { default as Icon } from "./components/Icon";
export { default as Progress } from "./components/Progress";
export { default as Tabs } from "./components/Tabs";
export { default as Upload } from "./components/Upload";
