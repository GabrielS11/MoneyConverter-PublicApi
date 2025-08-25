import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { ArrowUpDown, TrendingUp } from "lucide-react";
import ColourfulText from "./ui/colourful-text";

const exchangeRates: Record<string, number> = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.0,
};

const currencies = [
  { code: "USD", name: "US Dollar", flag: "us" },
  { code: "EUR", name: "Euro", flag: "eu" },
  { code: "GBP", name: "British Pound", flag: "gb" },
  { code: "JPY", name: "Japanese Yen", flag: "jp" },
];

export default function CardForm() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD"); // valor inicial
  const [toCurrency, setToCurrency] = useState("EUR"); // valor inicial

  const convertCurrency = (
    amount: string,
    from: string,
    to: string
  ): string => {
    if (!amount || isNaN(Number(amount))) return "0";
    if (!exchangeRates[from] || !exchangeRates[to]) return "0"; // evita NaN

    const amountInUSD = Number(amount) / exchangeRates[from];
    const convertedAmount = amountInUSD * exchangeRates[to];
    return convertedAmount.toFixed(2);
  };

  // quando edita o campo "From"
  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    const converted = convertCurrency(value, fromCurrency, toCurrency);
    setToAmount(converted);
  };

  // quando edita o campo "To"
  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    const converted = convertCurrency(value, toCurrency, fromCurrency);
    setFromAmount(converted);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    const converted = convertCurrency(toAmount, toCurrency, fromCurrency);
    setToAmount(converted);
  };

  useEffect(() => {
    if (fromAmount) {
      const converted = convertCurrency(fromAmount, fromCurrency, toCurrency);
      setToAmount(converted);
    }
  }, [fromCurrency, toCurrency]);

  const rate =
    exchangeRates[fromCurrency] && exchangeRates[toCurrency]
      ? exchangeRates[toCurrency] / exchangeRates[fromCurrency]
      : 0;

  return (
    <>
      <div className="bg-card text-card-foreground gap-6 rounded-xl border py-6 shadow-sm h-full w-full flex flex-col justify-center items-center">
        <div className="w-full h-full max-w-2xl mx-auto shadow-card hover:shadow-hover transition-smooth bg-gradient-card backdrop-blur-sm border-0 flex flex-col justify-center items-center">
          <section className="header w-full h-[13vh] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center flex-col">
              <h1 className="text-4xl">
                <ColourfulText text="Currency Converter" />
              </h1>
              <p>
                Convert between {currencies.length} major currencies instantly.
              </p>
            </div>
          </section>

          <section className="content w-full h-[30vh] ">
            <div className="h-full w-full space-y-6 flex flex-col gap-2">
              <Label className="text-sm font-medium">From</Label>
              <div className="h-fit w-full flex flex-row gap-1">
                <div className="w-full">
                  <Input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => handleFromAmountChange(e.target.value)}
                    className="text-lg font-semibold h-12 transition-smooth focus:shadow-card"
                    placeholder="0.00"
                  />
                </div>
                <div className="h-full flex items-center justify-center">
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger className="w-32 h-12 transition-smooth">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          <div className="flex items-center space-x-2">
                            <span>{currency.code}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleSwapCurrencies}
                  className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-105"
                >
                  <ArrowUpDown className="h-5 w-5" />
                </Button>
              </div>
              <Label className="text-sm font-medium">To</Label>
              <div className="h-fit w-full flex flex-row gap-1">
                <div className="w-full">
                  <Input
                    type="number"
                    value={toAmount}
                    onChange={(e) => handleToAmountChange(e.target.value)}
                    className="text-lg font-semibold h-12 transition-smooth focus:shadow-card"
                    placeholder="0.00"
                  />
                </div>
                <div className="h-full flex items-center justify-center">
                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger className="w-32 h-12 transition-smooth">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          <div className="flex items-center space-x-2">
                            <span>{currency.code}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full h-1/8">
            <div className=" h-3/4 w-full bg-muted/50 p-4 rounded-lg border flex intems-center justify-center flex-row">
              <div className="flex items-center justify-between flex-row  gap-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Current Rate</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
