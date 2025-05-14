
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface OfflineAlertProps {
  isOfflineMode: boolean;
}

const OfflineAlert = ({ isOfflineMode }: OfflineAlertProps) => {
  // Always return null to hide the component
  return null;
};

export default OfflineAlert;
