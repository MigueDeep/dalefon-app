import { Control, Controller, FieldError, FieldValues } from "react-hook-form";
import { ReactNode, useState } from "react";
import {
  InputLabel,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
interface Props<T extends FieldValues> {
  name: keyof T;
  control?: Control<T>;
  label: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
  icon?: ReactNode;
  className?: string;
}

export const CustomInput = <T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  error,
  placeholder,
  icon,
  className,
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      className={className}
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <InputLabel htmlFor={String(name)}>{label}</InputLabel>
      {control && (
        <Controller
          name={name as any}
          control={control}
          render={({ field }) => (
            <TextField
              id={String(name)}
              placeholder={placeholder}
              type={type === "password" && showPassword ? "text" : type}
              {...field}
              error={!!error}
              InputProps={{
                startAdornment: icon ? (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ) : undefined,
                endAdornment:
                  type === "password" && field.value ? (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handlePasswordToggle}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ) : undefined,
              }}
              fullWidth
            />
          )}
        />
      )}
      {error && <FormHelperText error>{error.message}</FormHelperText>}
    </Box>
  );
};
