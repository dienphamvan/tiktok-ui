import Header from '~/component/Layout/component/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container">{children}</div>
        </>
    );
}

export default HeaderOnly;
