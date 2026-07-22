import {
  icons,
  ListChecks,
  MessageSquareWarning,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import type { HakKewajibanItem } from "../../types";
import { cn } from "../../libs/utils";
import { hakPasienItems, kewajibanPasienItems } from "../../data/mockData";

type Tab = "hak" | "kewajiban";

const tabConfig = {
  hak: {
    label: "Hak Pasien",
    icon: ShieldCheck,
    numColor: { bg: "#E1F5EE", text: "#085041" },
    iconColor: "#0F6E56",
    statBg: "#E1F5EE",
    statColor: "#0F6E56",
  },
  kewajiban: {
    label: "Kewajiban pasien",
    icon: ListChecks,
    numColor: { bg: "#E6F1FB", text: "#0C447C" },
    iconColor: "#185FA5",
    statBg: "#E6F1FB",
    statColor: "185FA5",
  },
};

function DynamicIcon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = (
    icons as Record<
      string,
      React.FC<{
        className?: string;
        style?: React.CSSProperties;
      }>
    >
  )[name];

  if (!Icon) return null;
  return <Icon className={className} style={style} />;
}

const ItemRow = ({
  item,
  index,
  tab,
}: {
  item: HakKewajibanItem;
  index: number;
  tab: Tab;
}) => {
  const config = tabConfig[tab];
  return (
    <div className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5"
        style={{ background: config.numColor.bg, color: config.numColor.text }}
      >
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <DynamicIcon
            name={item.icon}
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: config.iconColor }}
          />
          <span className="text-sm font-medium text-foreground">
            {item.label}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const HakDanKewajibanPage = () => {
  const [activeTab, setActiveTab] = React.useState<Tab>("hak");
  const items = activeTab === "hak" ? hakPasienItems : kewajibanPasienItems;

  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      {/* Header */}
      <section className="relative rounded-3xl bg-primary overflow-hidden p-8 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-secondary">
            Hak & Kewajiban <span className="text-cyan-300">Pasien</span>
          </h2>
          <p className="text-sm text-secondary/60 mt-0.5">
            RSUD Karawang - berdasarkan UU No. 44 Tahun 2009 tentang Rumah Sakit
          </p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3 mb-6 mt-7">
        {(Object.entries(tabConfig) as [Tab, (typeof tabConfig)[Tab]][]).map(
          ([key, config]) => {
            const Icon = config.icon;
            const count =
              key === "hak"
                ? hakPasienItems.length
                : kewajibanPasienItems.length;
            return (
              <div
                key={key}
                className="bg-muted shadow rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer"
                onClick={() => setActiveTab(key)}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0"
                  style={{ background: config.statBg }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: config.statColor }}
                  />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">
                    {config.label}
                  </p>
                  <p className="text-lg font-medium text-foreground leading-tight">
                    {count}{" "}
                  </p>
                  <span className="text-xs font-normal text-muted-foreground">
                    poin
                  </span>
                </div>
              </div>
            );
          },
        )}
      </div>

      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="flex border-b border-border">
          {(Object.entries(tabConfig) as [Tab, (typeof tabConfig)[Tab]][]).map(
            ([key, config]) => {
              const Icon = config.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer",
                    activeTab === key
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {config.label}
                </button>
              );
            },
          )}
        </div>

        <div className="px-4 py-1">
          {items.map((item, i) => (
            <ItemRow key={item.label} item={item} index={i} tab={activeTab} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 bg-muted/50 rounded-lg px-4 py-3">
        <MessageSquareWarning className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Apabila hak-hak pasien tidak terpenuhi, dapat menyampaikan pengaduan
          kepada bagian{" "}
          <span className="text-foreground font-medium">
            {"Hubungan Masyarakat (Humas)"}
          </span>{" "}
          RSUD Kabupaten Karawang.
        </p>
      </div>
    </div>
  );
};

export default HakDanKewajibanPage;
