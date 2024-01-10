﻿using RobotService.Models.Contracts;
using RobotService.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RobotService.Models
{
    public abstract class Robot : IRobot
    {
        private string model;
        private int batteryCapacity;
        private int batteryLevel;
        private int convertionCapacityIndex;
        private List<int> interfaceStandards;

        public Robot(string model, int batteryCapacity, int conversionCapacityIndex)
        {
            Model = model;
            BatteryCapacity = batteryCapacity;
            BatteryLevel = batteryCapacity;
            ConvertionCapacityIndex = conversionCapacityIndex;
            interfaceStandards = new List<int>();
        }
        public string Model
        {
            get => model;
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException(ExceptionMessages.ModelNullOrWhitespace);
                }
                model = value;
            }
        }

        public int BatteryCapacity
        {
            get => batteryCapacity;
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException(ExceptionMessages.BatteryCapacityBelowZero);
                }
                batteryCapacity = value;
            }
        }

        public int BatteryLevel
        {
            get => batteryLevel;
            private set => batteryLevel = value;
        }

        public int ConvertionCapacityIndex
        {
            get => convertionCapacityIndex;
            private set => convertionCapacityIndex = value;
        }

        public IReadOnlyCollection<int> InterfaceStandards
            => interfaceStandards.AsReadOnly();


        public void Eating(int minutes)
        {
            BatteryLevel += ConvertionCapacityIndex * minutes;

            if (BatteryLevel > BatteryCapacity)
            {
                BatteryLevel = BatteryCapacity;
            }
        }

        public bool ExecuteService(int consumedEnergy)
        {
            if (BatteryLevel - consumedEnergy >= 0)
            {
                BatteryLevel -= consumedEnergy;
                return true;
            }
            return false;
        }

        public void InstallSupplement(ISupplement supplement)
        {
            interfaceStandards.Add(supplement.InterfaceStandard);
            BatteryCapacity -= supplement.BatteryUsage;
            BatteryLevel -= supplement.BatteryUsage;
        }

        public override string ToString()
            => $"{this.GetType().Name} {Model}:{Environment.NewLine}--Maximum battery capacity: {BatteryCapacity}{Environment.NewLine}--Current battery level: {BatteryLevel}{Environment.NewLine}--Supplements installed: {(interfaceStandards.Any() ? string.Join(" ", interfaceStandards) : "none")}";

    }
}
