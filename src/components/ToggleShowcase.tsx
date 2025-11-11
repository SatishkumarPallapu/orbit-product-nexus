import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from './ui/switch';
import { Toggle } from './ui/toggle';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Bold, Italic, Underline, Moon, Sun, Wifi, WifiOff } from 'lucide-react';

export const ToggleShowcase = () => {
  const [switchStates, setSwitchStates] = useState({
    notifications: false,
    darkMode: false,
    wifi: true,
  });
  
  const [boldActive, setBoldActive] = useState(false);
  const [alignment, setAlignment] = useState('center');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto p-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
        Interactive Toggle Components
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Switch Components */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="corporate-glass p-6 rounded-2xl border border-white/20"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Switches</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {switchStates.darkMode ? <Moon className="text-primary" size={20} /> : <Sun className="text-primary" size={20} />}
                <label className="text-sm font-medium text-foreground">Dark Mode</label>
              </div>
              <Switch
                checked={switchStates.darkMode}
                onCheckedChange={(checked) => setSwitchStates({ ...switchStates, darkMode: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {switchStates.wifi ? <Wifi className="text-primary" size={20} /> : <WifiOff className="text-muted-foreground" size={20} />}
                <label className="text-sm font-medium text-foreground">WiFi</label>
              </div>
              <Switch
                checked={switchStates.wifi}
                onCheckedChange={(checked) => setSwitchStates({ ...switchStates, wifi: checked })}
              />
            </div>
          </div>
        </motion.div>

        {/* Toggle Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="corporate-glass p-6 rounded-2xl border border-white/20"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Toggle Buttons</h3>
          
          <div className="space-y-4">
            <Toggle
              pressed={boldActive}
              onPressedChange={setBoldActive}
              aria-label="Toggle bold"
              className="w-full"
            >
              <Bold className="h-4 w-4 mr-2" />
              Bold {boldActive && '✓'}
            </Toggle>

            <Toggle variant="outline" aria-label="Toggle italic">
              <Italic className="h-4 w-4 mr-2" />
              Italic
            </Toggle>

            <Toggle variant="outline" aria-label="Toggle underline">
              <Underline className="h-4 w-4 mr-2" />
              Underline
            </Toggle>
          </div>
        </motion.div>

        {/* Toggle Group */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="corporate-glass p-6 rounded-2xl border border-white/20"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Toggle Groups</h3>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Text Alignment</label>
              <ToggleGroup type="single" value={alignment} onValueChange={setAlignment}>
                <ToggleGroupItem value="left" aria-label="Align left">
                  Left
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  Center
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  Right
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Text Style</label>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
