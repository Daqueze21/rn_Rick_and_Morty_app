import { TabIcon } from '@/src/components';
import { COLORS } from '@/src/constants/colors';
import { TABS_DATA } from '@/src/constants/routes';
import { Tabs } from 'expo-router';
import React from 'react';

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        },
        tabBarStyle: {
          backgroundColor: COLORS.bgIndigo,
          borderWidth: 1,
          borderColor: COLORS.bgIndigo,
        },
      }}>
      {TABS_DATA.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          key={tab.id}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} title={tab.title} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _Layout;
