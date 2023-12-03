import { Icon } from "@components/Icon";
import { Color, THEME } from "@shared/theme";
import {
  Pressable,
  StyleProp,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";

import { $container, $textInput } from "./styles";
import { FC, useEffect, useRef, useState } from "react";

interface SearchProps extends TextInputProps {}

export const Search: FC<SearchProps> = ({
  autoFocus = false,
  value,
  onFocus: _onFocus,
  onBlur: _onBlur,
  style: $overrideStyles,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const iconColor: Color = value
    ? "YELLOW_DARK"
    : isFocused
    ? "YELLOW"
    : "GRAY_400";

  const $containerStyle = [$container, $overrideStyles] as StyleProp<ViewStyle>;

  useEffect(() => {
    if (isFocused || autoFocus) {
      textInputRef.current?.focus();
    } else {
      textInputRef.current?.blur();
    }
  }, [isFocused]);

  return (
    <Pressable style={$containerStyle} onPress={() => setIsFocused(true)}>
      <Icon name="MagnifyingGlass" color={iconColor} />

      <TextInput
        ref={textInputRef}
        placeholder="Pesquisar"
        style={$textInput}
        selectionColor={THEME.COLORS.GRAY_400}
        onFocus={(event) => {
          setIsFocused(true);
          _onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          _onBlur?.(event);
        }}
        value={value}
        {...rest}
      />
    </Pressable>
  );
};
