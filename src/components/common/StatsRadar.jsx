import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from 'recharts'
import { useGameState } from '../../hooks/useGameState'

export default function StatsRadar() {
    const state = useGameState()
    const rawStats = state.stats || { communication: 10, analysis: 10, product: 10, execution: 10 }

    const data = [
        { subject: '커뮤니케이션', A: rawStats.communication, fullMark: 100 },
        { subject: '분석력', A: rawStats.analysis, fullMark: 100 },
        { subject: '제품 감각', A: rawStats.product, fullMark: 100 },
        { subject: '실행력', A: rawStats.execution, fullMark: 100 },
    ]

    const roleColor = state.playerRole === 'pm'
        ? '#5b8df0'
        : state.playerRole === 'designer'
            ? '#b07aa1'
            : '#59a14f'

    const maxStat = Math.max(...Object.values(rawStats))
    const domainMax = Math.max(100, maxStat + 20)

    return (
        <div style={{
            width: '100%',
            height: '180px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '16px',
            padding: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700 }}
                    />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, domainMax]}
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        name="Stats"
                        dataKey="A"
                        stroke={roleColor}
                        strokeWidth={2}
                        fill={roleColor}
                        fillOpacity={0.35}
                        isAnimationActive={true}
                        animationDuration={1200}
                        animationEasing="ease-out"
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
