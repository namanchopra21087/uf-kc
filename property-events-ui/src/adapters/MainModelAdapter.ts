import { MainModel } from "./models/main-model/MainModel";
import { HalIO } from "@unifocus/js-utils";

const MAIN_API_URL: string = process.env.REACT_APP_API_URL || '';

export const fetchInitialMainModel = (): Promise<MainModel> => {
  const appUrl: string = MAIN_API_URL;
  console.log(appUrl, "appUrl");
  const mainModelIO = new HalIO(MainModel);
  return mainModelIO.get(appUrl).then((response) => {
    return response.data;
  }).catch((err) => {
    return err;
  });
};