import React from 'react';

export default function Parceira() {
    return (
        <section className="parceira">
            <div className="container">
                <div className="parceira-card reveal">
                    <div className="parceira-avatar">P</div>
                    <div>
                        <div className="parceira-name">Parceira do Escritório</div>
                        <div className="parceira-role">Especialidade · Advocacia — <em
                            style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>(dados a confirmar)</em></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
