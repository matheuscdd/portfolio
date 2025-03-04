import { IconType } from "react-icons";

export type iStack = {
    title: string,
    icon: string | IconType,
}

export type iSegment = Readonly<Array<iStack>>;