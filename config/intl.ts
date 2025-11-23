import keys from "lodash/keys";
import type { FlattenedDictionary, NestedDictionary } from "@utils/types";

export const flattenMessages = (
  nestedMessages: NestedDictionary,
  prefix = ""
): FlattenedDictionary =>
  keys(nestedMessages).reduce((messages: FlattenedDictionary, key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    const messagesFlattend = { ...messages };
    if (typeof value === "string") {
      messagesFlattend[prefixedKey] = value;
    } else {
      Object.assign(messagesFlattend, flattenMessages(value, prefixedKey));
    }
    return messagesFlattend;
  }, {});
