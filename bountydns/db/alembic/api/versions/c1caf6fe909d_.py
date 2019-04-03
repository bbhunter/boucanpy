"""empty message

Revision ID: c1caf6fe909d
Revises: d8b944733252
Create Date: 2019-03-30 23:43:51.868551

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c1caf6fe909d'
down_revision = 'd8b944733252'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('api_tokens',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('token', sa.String(), nullable=True),
    sa.Column('scopes', sa.String(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_api_tokens_id'), 'api_tokens', ['id'], unique=False)
    op.create_index(op.f('ix_api_tokens_token'), 'api_tokens', ['token'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_api_tokens_token'), table_name='api_tokens')
    op.drop_index(op.f('ix_api_tokens_id'), table_name='api_tokens')
    op.drop_table('api_tokens')
    # ### end Alembic commands ###