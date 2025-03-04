import { IconType } from "react-icons";

export type iStack = {
    title: string,
    icon: string | IconType,
    color: string,
    filter: string,
}

export type iSegment = Readonly<Array<iStack>>;