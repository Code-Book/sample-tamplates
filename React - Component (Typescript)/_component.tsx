import * as React from 'react';

class {{properCase name}} extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={`${this.props.className}`}>
                
            </div>
        );
    }
}

export default {{properCase name}};
