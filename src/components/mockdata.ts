
export interface Account {
    id: number;
    bankBalance: number;
  }
  
  export const mockAccounts: Account[] = [
    {
      id: 1,
      bankBalance: 80000,
    },
    {
      id: 2,
      bankBalance: 20000,
    }
  ];
  

export interface FinancialData {
  date: string; 
  value: number; 
}

export const financialData: FinancialData[] = [
  { date: '2024-04-01', value: 100 },
  { date: '2024-04-02', value: 120 },
  { date: '2024-04-03', value: 180 },
  { date: '2024-04-04', value: 200 }
  
];
