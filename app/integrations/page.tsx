"use client";

import Integrations from "@/components/Integrations";
import { Suspense } from 'react'
const IntegrationsPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Integrations />
        </Suspense>
    )
}

export default IntegrationsPage;
