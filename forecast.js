window.FORECAST_DATA = {
  "generated_at": "2026-06-04T14:20:00+02:00",
  "weekend": "2026-06-05/06",
  "note": "Mid-week manual run. RASP d1/d2 showing Thu 5 Jun and Fri 6 Jun. Weekend Sat/Sun data available after Friday evening model run.",
  "saturday": {
    "date": "2026-06-05",
    "label": "Thursday 5 Jun (RASP d1)",
    "assessment": {
      "cape": {"value": 91, "interpretation": "Very low instability, minimal thermal energy"},
      "showalter": {"value": 5, "interpretation": "Stable, positive index suppresses convection"},
      "lcl_ft": 4300,
      "lapse_rate": "marginal",
      "lapse_detail": "Slight conditional instability below 850 hPa, strong inversion cap above",
      "surface_wind": "NW 10-15 kt",
      "wind_850": "NW 15-20 kt",
      "wind_700": "NW/W 20-25 kt",
      "ridge_potential": "Good. NW flow 15-20kt ideal for Slanghoek face and Du Toitskloof SW slopes",
      "wave_potential": "Moderate to good. Strong NW gradient increasing with height, perpendicular to Boland ranges",
      "pwat": 2,
      "cloud_water": "0.0 g/kg",
      "expected_cloud": "Blue day, no cu. Possible lenticular in wave",
      "verdict": {
        "thermal_strength": {"rating": "poor", "detail": "CAPE 91 J/kg far too low for usable thermals"},
        "thermal_height": {"rating": "poor", "detail": "Inversion caps at ~850 hPa, tops 3000-4000 ft AGL"},
        "cu_marking": {"rating": "poor", "detail": "Blue day, no moisture for cu"},
        "wind_ridge": {"rating": "good", "detail": "NW 15-20kt excellent for Slanghoek ridge"},
        "spreadout": {"rating": "good", "detail": "No overdevelopment risk, too dry"}
      },
      "recommendation": "No thermal soaring. Ridge soaring on Slanghoek with strong NW flow. Wave potential above ridge height. Best window 11:00-15:00. Local ridge runs only."
    }
  },
  "sunday": {
    "date": "2026-06-06",
    "label": "Friday 6 Jun (RASP d2)",
    "assessment": {
      "cape": {"value": 25, "interpretation": "Essentially zero thermal energy"},
      "showalter": {"value": 13, "interpretation": "Very stable, strongly positive, atmosphere suppressed"},
      "lcl_ft": 7100,
      "lapse_rate": "stable",
      "lapse_detail": "Strong subsidence inversion, isothermal layer near 850 hPa",
      "surface_wind": "NW 5-10 kt",
      "wind_850": "NW 10-15 kt",
      "wind_700": "NW 15-20 kt",
      "ridge_potential": "Marginal. Wind 10-15kt at ridge height, borderline for sustaining flight",
      "wave_potential": "Marginal. Weaker gradient than Thursday",
      "pwat": 1,
      "cloud_water": "0.0 g/kg",
      "expected_cloud": "Blue day, completely clear",
      "verdict": {
        "thermal_strength": {"rating": "poor", "detail": "CAPE 25 J/kg, no usable thermals"},
        "thermal_height": {"rating": "poor", "detail": "Strong inversion, dead air"},
        "cu_marking": {"rating": "poor", "detail": "Blue, bone dry"},
        "wind_ridge": {"rating": "marginal", "detail": "NW 10-15kt at 850, borderline for ridge"},
        "spreadout": {"rating": "good", "detail": "No cloud risk"}
      },
      "recommendation": "Stay home. Deeply stable with Shox 13-16, no thermal energy, insufficient wind for reliable ridge soaring. Not worth rigging."
    }
  }
};