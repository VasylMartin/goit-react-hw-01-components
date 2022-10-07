import PropTypes from 'prop-types'
import {StatisticsSection, SectionTitle, StatList, StatItem, ItemLabel, ItemVlue} from './Statistics.styled'

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({title, stats}) => {
    return (
    <StatisticsSection>
        {title !=='' && <SectionTitle>{title}</SectionTitle>}
    <StatList>
        {stats.map(({id, label, percentage}) =>(
            <StatItem key={id} style={{ backgroundColor: getRandomColor() }}>
            <ItemLabel>{label}</ItemLabel>
            <ItemVlue>{percentage}%</ItemVlue>
            </StatItem>
        ))}
    </StatList>
</StatisticsSection>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ),
};