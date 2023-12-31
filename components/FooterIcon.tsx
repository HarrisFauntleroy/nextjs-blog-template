import { ActionIcon, Anchor, Tooltip } from "@mantine/core";
import { ReactNode } from "react";

type FooterIconProperties = {
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
};

export function FooterIcon({
  label,
  icon,
  onClick,
  href,
}: FooterIconProperties) {
  return (
    <Tooltip label={label}>
      <Anchor href={href} onClick={onClick} title={label}>
        <ActionIcon variant="link" onClick={onClick} title={label} size="sm">
          {icon}
        </ActionIcon>
      </Anchor>
    </Tooltip>
  );
}
