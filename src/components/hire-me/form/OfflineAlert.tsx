
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface OfflineAlertProps {
  isOfflineMode: boolean;
}

const OfflineAlert = ({ isOfflineMode }: OfflineAlertProps) => {
  if (!isOfflineMode) return null;
  
  return (
    <Alert className="mb-6 bg-dark-300 border-yellow-600">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertTitle className="text-yellow-600">Offline Mode</AlertTitle>
      <AlertDescription className="text-white/70">
        Database is not connected. Your form submissions will be saved locally and sent to the webhook.
      </AlertDescription>
    </Alert>
  );
};

export default OfflineAlert;
