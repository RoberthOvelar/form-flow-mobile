import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextInput, TextInputProps } from "../text-input";

type InputProps<T extends FieldValues> = TextInputProps & {
  name: Path<T>;
  control: Control<T>;
};

export function FormTextInput<T extends FieldValues>(props: InputProps<T>) {
  const { control, name, ...otherProps } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          errorMessage={error?.message}
          {...otherProps}
        />
      )}
    />
  );
}
