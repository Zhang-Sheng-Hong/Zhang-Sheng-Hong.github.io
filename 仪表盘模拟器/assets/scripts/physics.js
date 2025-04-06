function simulatePhysics() {
    // 模拟空气阻力对速度的影响
    const drag = velocity * 0.01; // 阻力与速度成正比
    velocity = Math.max(200, Math.min(300, velocity + acceleration - drag));

    // 更新俯仰角和滚转角，添加惯性效果
    currentPitch += pitchRate * 0.5; // 俯仰角变化更平滑
    currentPitch = Math.max(-10, Math.min(10, currentPitch)); // 限制俯仰角范围

    currentRoll += rollRate * 0.5; // 滚转角变化更平滑
    currentRoll = Math.max(-30, Math.min(30, currentRoll)); // 限制滚转角范围

    // 根据俯仰角和速度更新高度，添加高度限制
    const climbRate = currentPitch * (velocity / 250) * 0.5; // 爬升/下降速率
    currentAltitude = Math.max(0, Math.min(40000, currentAltitude + climbRate)); // 限制高度范围

    // 计算垂直速度（英尺/分钟）
    const verticalSpeed = Math.round(climbRate * 600); // 将爬升速率转换为每分钟的英尺

    // 燃油消耗与速度和爬升速率相关
    const fuelConsumption = velocity * 0.002 + Math.abs(climbRate) * 0.001; // 燃油消耗公式
    currentFuel = Math.max(0, currentFuel - fuelConsumption);

    // 模拟航向变化，滚转角影响航向
    currentHeading = (currentHeading + currentRoll * 0.2) % 360;

    // 模拟发动机转速变化
    engine1RPM = Math.max(70, Math.min(100, (velocity - 200) / 1)); // 发动机转速与速度线性相关
    engine2RPM = Math.max(70, Math.min(100, (velocity - 200) / 1)); // 同步发动机 2 转速

    // 更新垂直速度
    currentVerticalSpeed = verticalSpeed;
}