import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatCard } from "./StatCard";

const meta = {
  title: "Components/UI/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    value: { control: "number" },
    previousValue: { control: "number" },
    format: {
      control: "radio",
      options: ["currency", "number", "percentage"],
    },
    trend: {
      control: "radio",
      options: ["up", "down", "neutral", "warning"],
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "本日の売上",
    value: 123456,
    format: "currency",
  },
};

export const WithTrendUp: Story = {
  args: {
    title: "本日の売上",
    value: 123456,
    previousValue: 110000,
    format: "currency",
    trend: "up",
  },
};

export const WithTrendDown: Story = {
  args: {
    title: "本日の注文数",
    value: 89,
    previousValue: 95,
    format: "number",
    trend: "down",
  },
};

export const PercentageFormat: Story = {
  args: {
    title: "コンバージョン率",
    value: 3.45,
    previousValue: 3.21,
    format: "percentage",
    trend: "up",
  },
};

export const LoadingState: Story = {
  args: {
    title: "読み込み中...",
    value: 0,
    format: "currency",
    isLoading: true,
  },
};

export const WarningTrend: Story = {
  args: {
    title: "わずかな変動",
    value: 52000,
    previousValue: 50000,
    format: "currency",
    trend: "warning",
  },
};

export const LargeNumbers: Story = {
  args: {
    title: "月間総売上",
    value: 15678900,
    previousValue: 14200000,
    format: "currency",
  },
};
