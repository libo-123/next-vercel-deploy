"use client";

import { useState } from "react";


/**
 * 模板组件
 * @returns
 */
export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(0);
    return (
      <div className="template border-2 border-dashed border-black p-4 mt-4">
        <h2>dashbord-template-state: {state}</h2>
        <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setState(state + 1)}>increment</button>
        {children}
      </div>
    );
  }
  